import React, { useEffect, useState } from 'react';
import { getJobs } from '../../utils/api';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await getJobs();
                setJobs(response.data.jobs);
                setIsError(false);
            } catch (err) {
                console.error(err);
                setIsError(true);
            }
        };
        fetchJobs();
    }, []);

    if (isError) {
        <h3>Sorry! Error loading jobs...</h3>
    }

    return (
        <div className="jobs">
            {jobs.map((job, idx) => (
                <div key={`job-${idx}`}>
                    <p>{job.name}</p>
                    <p>{job.description}</p>
                    <p>{job.department}</p>
                    <p>{job.location}</p>
                    <p>{job.applyUrl}</p>
                </div>
            ))}
        </div>
    );
}

export default Jobs;