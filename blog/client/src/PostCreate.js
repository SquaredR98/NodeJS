import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
	const [title, setTitle] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle("");
    }
	return (
		<div >
			<form onSubmit={onSubmit} className="d-grid gap-2">
				<div className="form-group">
					<label className="form-label">Post Title</label>
					<input
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						className="form-control"
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default PostCreate;
