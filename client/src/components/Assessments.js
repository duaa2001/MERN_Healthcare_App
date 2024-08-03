// This will be updated!!

// Basic image and link for breast care self-assessment

import React from 'react';

const Assessment = () => {
    return (
        <div className="assessment">
            <h3>Breast Cancer</h3>
            <img
                src="/breast-self-exam-chart-pink.jpg"
                alt="Breast Self Exam Chart"
            />
            <p>Image source: <a href="https://healthmatters.nyp.org/what-is-breast-self-awareness-and-why-is-it-important/" target="_blank" rel="noopener noreferrer">Health Matters - NYP</a></p>
            
            <div className="assessment new-moms-assessment">
                <h3>New Moms</h3>
                <img
                    src="motherhood.jpg"
                    alt="New Moms Assessment"
                />
                <p>Image source: <a href="https://screening.mhanational.org/screening-tools/postpartum-depression/t" target="_blank" rel="noopener noreferrer">New Moms Org</a></p>
            </div>

            <div className="assessment mental-health-assessment">
                <h3>Mental Health Awareness</h3>
                <img
                    src="mental health.jpg"
                    alt="Mental Health Assessment"
                />
                <p>Image source: <a href="https://screening.mhanational.org/screening-tools/" target="_blank" rel="noopener noreferrer">Mental Health Org</a></p>
            </div>


            <div className="assessment diabetes-support-assessment">
                <h3>Diabetes Support</h3>
                <img
                    src="Diabetes-Symptoms-Prevention-MDIMC.jpg"
                    alt="Diabetes Support Assessment"
                />
                <p>Image source: <a href="http://www.betterfamilyhealth.org/symptoms-of-diabetes.html" target="_blank" rel="noopener noreferrer">Diabetes Org</a></p>
            </div>

            <div className="assessment menopause-support-assessment">
                <h3>Menopause Support</h3>
                <img
                    src="/stages-of-menopause.png"
                    alt="Menopause Support Assessment"
                />
                <p>Image source: <a href="https://www.shecares.com/menopause/stages-of-menopause/" target="_blank" rel="noopener noreferrer">Menopause Org</a></p>
            </div>
        </div>
    );
};


export default Assessment;

