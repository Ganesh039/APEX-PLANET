// Initialize like and dislike counts
let likeCount = 0;
let dislikeCount = 0;

// Get references to the elements
let likeBtn = document.querySelector('.like-btn');
let dislikeBtn = document.querySelector('.dislike-btn');
let likeCountDisplay = document.getElementById('like-count');
let dislikeCountDisplay = document.getElementById('dislike-count');

// Like Button Click Event
likeBtn.addEventListener('click', function() {
    likeCount += 1;  // Increase like count
    likeCountDisplay.textContent = likeCount;  // Update display
    alert("You liked this post!");  // Show warning message
});

// Dislike Button Click Event
dislikeBtn.addEventListener('click', function() {
    dislikeCount += 1;  // Increase dislike count
    dislikeCountDisplay.textContent = dislikeCount;  // Update display
    alert("You disliked this post!");  // Show warning message
});
