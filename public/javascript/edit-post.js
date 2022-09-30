async function editFormHandler(event) {
  event.preventDefault();


  const title = document.querySelector('input[name="post-title"]').value;
  const post_contents = document.querySelector('textarea[name="post-contents"]').value;


  // const title = document.querySelector('input[name="post-title"]').value.trim();
  // const body = document.querySelector('textarea[id="post-contents"]');
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      // post_id: id,
      title,
      post_contents
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);