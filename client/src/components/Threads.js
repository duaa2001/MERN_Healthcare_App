//used Backend (update to connect users)

import React, { useState, useEffect } from "react";
import axios from "axios";
import { getBaseUrl } from "../environments/baseurl";

function Threads() {
    const [threads, setThreads] = useState([]); // Store threads
    const [newThread, setNewThread] = useState(""); // New thread content
    const [newComment, setNewComment] = useState({}); // Store comments linked to thread IDs
    const username = localStorage.getItem('username'); // Get logged-in user's username from localStorage

    // Fetch all threads when the component mounts
    useEffect(() => {
        async function fetchThreads() {
            try {
                const response = await axios.get(`${getBaseUrl()}/api/threads`);
                setThreads(response.data); // Set threads in the state
            } catch (error) {
                console.error('Error fetching threads:', error);
            }
        }
        fetchThreads();
    }, []);

    // Handle new thread submission
    const handleThreadSubmit = async (e) => {
        e.preventDefault();

        if (!username) {
            alert('You must be logged in to create a thread!');
            return;
        }

        try {
            const response = await axios.post(`${getBaseUrl()}/api/threads`, { content: newThread, username });
            setThreads([...threads, response.data]); // Add new thread to the state
            setNewThread(""); // Clear the input
        } catch (error) {
            console.error('Error creating thread:', error);
        }
    };

    // Handle new comment submission
    const handleCommentSubmit = async (threadId, e) => {
        e.preventDefault();

        if (!username) {
            alert('You must be logged in to comment!');
            return;
        }

        try {
            const response = await axios.post(`${getBaseUrl()}/api/threads/${threadId}/comments`, { content: newComment[threadId] || "", username });
            const updatedThreads = threads.map((thread) => {
                if (thread._id === threadId) {
                    return {
                        ...thread,
                        comments: [...thread.comments, response.data] // Add the new comment
                    };
                }
                return thread;
            });
            setThreads(updatedThreads); // Update state with new comment
            setNewComment({ ...newComment, [threadId]: "" }); // Clear the comment input field
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    // Handle comment input change
    const handleCommentChange = (threadId, value) => {
        setNewComment({ ...newComment, [threadId]: value });
    };

    // Delete a thread - only if the logged-in user is the creator
    const handleDeleteThread = async (threadId, threadUsername) => {
        if (username !== threadUsername) {
            alert('You are not authorized to delete this thread!');
            return;
        }

        try {
            await axios.delete(`${getBaseUrl()}/api/threads/${threadId}`, { data: { username } });

            // Remove the deleted thread from the state
            const updatedThreads = threads.filter(thread => thread._id !== threadId);
            setThreads(updatedThreads);
        } catch (error) {
            console.error('Error deleting thread:', error);
        }
    };

    return (
        <div className="threads">
            <h2>THREADS</h2>
            {username && (
                <form onSubmit={handleThreadSubmit} className="set-threads">
                    <input
                        type="text"
                        value={newThread}
                        onChange={(e) => setNewThread(e.target.value)}
                        placeholder="Start a new thread"
                        required
                    />
                    <button type="submit">New Thread</button>
                </form>
            )}

            {threads.map((thread) => (
                <div key={thread._id} className="thread-container">
                    <h3>{thread.content}</h3>
                    <p>Posted by: {thread.username}</p>

                    {username === thread.username && (
                        <button onClick={() => handleDeleteThread(thread._id, thread.username)}>Delete Thread</button>
                    )}

                    {username && (
                        <form onSubmit={(e) => handleCommentSubmit(thread._id, e)}>
                            <input
                                type="text"
                                value={newComment[thread._id] || ""}
                                onChange={(e) => handleCommentChange(thread._id, e.target.value)}
                                placeholder="Add a comment"
                            />
                            <button type="submit">Add Comment</button>
                        </form>
                    )}

                    {thread.comments.map((comment) => (
                        <p key={comment._id} className="comment-container">{comment.content}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Threads;








