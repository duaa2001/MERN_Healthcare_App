//used Backend (update to connect users)
//add more detailed comments

import React, { useState, useEffect } from "react";
import axios from "axios";
import { getBaseUrl } from "../environments/baseurl";

function Threads() {
    const [threads, setThreads] = useState([]);
    const [newThread, setNewThread] = useState("");
    const [newComment, setNewComment] = useState({});

    // Fetch all threads when the component mounts
    useEffect(() => {
        async function fetchThreads() {
            try {
                const response = await axios.get(`${getBaseUrl()}/api/threads`);
                setThreads(response.data);
            } catch (error) {
                console.error('Error fetching threads:', error);
            }
        }
        fetchThreads();
    }, []);

    // Handle new thread submission
    const handleThreadSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${getBaseUrl()}/api/threads`, { content: newThread });
            setThreads([...threads, response.data]);
            setNewThread("");
        } catch (error) {
            console.error('Error creating thread:', error);
        }
    };

    // Handle new comment submission
    const handleCommentSubmit = async (threadId, e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${getBaseUrl()}/api/threads/${threadId}/comments`, { content: newComment[threadId] || "" });
            const updatedThreads = threads.map((thread) => {
                if (thread._id === threadId) {
                    return {
                        ...thread,
                        comments: [...thread.comments, response.data]
                    };
                }
                return thread;
            });
            setThreads(updatedThreads);
            setNewComment({ ...newComment, [threadId]: "" });
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    //save comment input to intended thread
    const handleCommentChange = (threadId, value) => {
        setNewComment({ ...newComment, [threadId]: value });
    };

    // Delete threads
    const handleDeleteThread = async (threadId) => {
        try {
            // Send a delete request to the server
            await axios.delete(`http://localhost:5001/api/threads/${threadId}`);
    
            // Remove the deleted thread from the state
            const updatedThreads = threads.filter(thread => thread._id !== threadId);
            setThreads(updatedThreads);
        } catch (error) {
            console.error('Error deleting thread:', error);
        }
    };
    

    // set up UI as discussion forum
    return (
        <div className="threads">
            <h2>THREADS</h2>
            <form onSubmit={handleThreadSubmit} className="set-threads">
                <input
                    type="text"
                    value={newThread}
                    onChange={(e) => setNewThread(e.target.value)}
                    placeholder="Start a new thread"
                />
                <button type="submit">New Thread</button>
            </form>
            {threads.map((thread) => (
                <div key={thread._id} className = "thread-container">
                    <button onClick={() => handleDeleteThread(thread._id)}>Delete Thread</button>
                    <h3>{thread.content}</h3>
                    <form onSubmit={(e) => handleCommentSubmit(thread._id, e)}>
                        <input
                            type="text"
                            value={newComment[thread._id] || ""}
                            onChange={(e) => handleCommentChange(thread._id, e.target.value)}
                            placeholder="Add a comment"
                        />
                        <button type="submit">Add Comment</button>
                    </form>
                    {thread.comments.map((comment) => (
                        <p key={comment._id} className = "comment-container">{comment.content}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Threads;






