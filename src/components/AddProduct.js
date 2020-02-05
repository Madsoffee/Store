import styled from 'styled-components';
import { useState } from 'react';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const StyledWrapper = styled.div`
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 8px;
    width: 300px;
    padding: 10px;
    margin-bottom: 10px;

    p {
        margin-bottom: 4px;
    }

    input, textarea {
        margin-bottom: 4px;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 4px;
        padding: 4px;
    }

    button {
        padding: 4px 8px;
        border: none;
        border-radius: 6px;
        outline: none;
        cursor: pointer;
    }

`

const AddProduct = props => {

    const[imageUrl, setImageUrl] = useState('');
    const[title, setTitle] = useState('');
    const[password, setPassword] = useState('');
    const[image, setImage] = useState('');

    const handleFile = e => {
        const reader =  new FileReader();

        reader.onload = e => {
            setImageUrl(e.target.result)
        }

        if (e.target.files[0])
            reader.readAsDataURL(e.target.files[0]);
    }

    const handleCreate = () => {
        props.handleCreate({ imageUrl, title, password, image });
    }

    return (
        <StyledWrapper>
            <div>
                <p>Title</p>
                <input onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <p>Gmail</p>
                <input onChange={e => setGmail(e.target.value)}/>
            </div>
            <div>
                <p>Password</p>
                <input type='password' onChange={e => setPassword(e.target.value)}/>
            </div>
            <input type='file' accept='image/*' onChange={handleFile}/>
            <button onClick={handleCreate}>Create</button>

        </StyledWrapper>
    )
}

export default AddProfile;