function addUser()
{
    player1name=document.getElementById("player1nameinput").value;
    player2name=document.getElementById("player2nameinput").value;

    localStorage.setItem("player1name",player1name);
    localStorage.setItem("player2name",player2name);

    window.location="quiz_game_page.html";
}