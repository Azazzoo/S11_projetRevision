

$("#nom2").keyup(function (){
    let $nom = $("#nom2").val();
    listmembre = JSON.parse(localStorage.getItem('list'))
    for(obj of listmembre){
        if (obj.nom !== $nom){
            $("#erreurnom").removeClass("visible")}
        else {
            membre1 = {'nom': obj.nom, 'age': obj.age, 'email': obj.email, 'mdp': obj.mdp}
            $("#erreurnom").addClass("visible")
        }
    }

})

$("#submit2").click(function (){
    $email = $("#email2").val();
    $mdp = $("#password2").val();
    if ($mdp !== membre1.mdp || $email !== membre1.email){
        event.preventDefault();
        $("#erreurmdp").removeClass("visible");
    }
})
