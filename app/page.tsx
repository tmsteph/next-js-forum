import React from 'react';

const ForumPage = () => {
    return (
        <div>
            <h1>Simple Forum</h1>
            <section>
                <h2>Create a Post</h2>
                <form>
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Your message"></textarea>
                    <button type="submit">Post</button>
                </form>
            </section>
            <section>
                <h2>Posts</h2>
                {/* Posts would be listed here */}
            </section>
        </div>
    );
};

export default ForumPage;
