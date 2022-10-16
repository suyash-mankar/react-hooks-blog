import {firestore} from '../firebase';
import {useFormInput} from '../hooks';

function CreatePost() {

    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');


    function handleSubmit(e){
        e.preventDefault();
        console.log('title', title.value);
        console.log('subTitle', title.value);
        console.log('content', title.value );
        

        firestore.collection('posts').add({
            title: title.value,
            subTitle: title.value,
            content: title.value,
            createdAt: new Date()
        });
    }

    return (
        <div className='create-post'>
            <h1> Create Post</h1>
            <form onSubmit={handleSubmit}> 
                <div className='form-field'> 
                    <label> Title </label>
                    <input {...title} />
                    {/* e.target.value is whatever the user is typing */}

                </div>
                <div className='form-field'> 
                    <label> SubTitle </label>
                    <input {...subTitle} />
                </div>
                <div className='form-field'> 
                    <label> Content </label>
                    <textarea {...content}>  </textarea>
                </div>

                <button className='create-post-btn'> Create Post </button>
            </form>
        </div>
    )
}

export default CreatePost;

