// this is the file that creates a new post from the dashboard

async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]');
    const post_contents = document.querySelector('textarea[name="post-contents"]');
  
    // this sends the post title along with the post - and will also grab the user ID (see api/post-routes.js)
    const response = await fetch(`/`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_contents 
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);