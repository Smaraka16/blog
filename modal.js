document.getElementById('button').addEventListener('click', function() {
    document.querySelector('.login').style.visibility = 'visible';
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});

document.getElementById('button1').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});