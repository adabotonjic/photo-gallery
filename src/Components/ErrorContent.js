import React from "react";

const ErrorContent = ({message}) => {

    let errorContent;

    switch (true) {
        case message.includes("404"):
            errorContent = (
                <>
                    <p>The keyword you searched for could not be found or is not existing.</p>
                    <p>
                        <a href="https://www.reddit.com/keywords" target="_blank" rel="noreferrer">
                            Here
                        </a> you can find a list of valid keywords.
                    </p>
                </>
            );
            break;
        case message.includes("403"):
            errorContent = (
                <>
                    <p>The keyword you searched is private.</p>
                    <p>Try with different search.</p> 
                    <p>
                        <a href="https://www.reddit.com/keywords" target="_blank" rel="noreferrer">
                            Here
                        </a> you can find a list of valid keywords.
                    </p>
                </>
            );
            break;
        case message.includes("500"):
            errorContent = (
                <p>There is a problem with the server. Please try again later.</p>
            );
            break;
        case message ==='Failed to fetch':
                errorContent = (
                    <>
                    <p>The keyword you searched for could not be found or is not existing.</p>
                    <p>
                        <a href="https://www.reddit.com/keywords" target="_blank" rel="noreferrer">
                            Here
                        </a> you can find a list of valid keywords.
                    </p>
                    </>
                );
                break;
        default:
            errorContent = (
                <p>There was an unexpected issue with your search.</p>
            );
    }

    return (
        <div className="mb-4 mt-3">
        <p className="h2">There was a problem with your search. </p>
        <div>Error:"{message}"</div>
        <div>{errorContent}</div>
        
        
      
        
        </div>
    )
    
}
export default ErrorContent;