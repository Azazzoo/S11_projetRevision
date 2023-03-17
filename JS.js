


    $("#password1").keyup(function (){
        let $mdp1 = $("#password1").val();
        let $mdp2 = $("#password2").val();
        if ($mdp1.length < 8){
            $("#erreur").removeClass("visible")
        }
        else{
            $("#erreur").addClass("visible")
            $("#submit").prop("disabled", false)
        }
    })
    $("#submit").click(function (){
        let $mdp = $("#password1").val();
        let $nom = $("#nom").val();
        let $age = $("#age").val();
        let $email = $("#email").val();
        function membre (nom = "", age = "", email = "" , mdp = 0){
            this.nom = nom
            this.age = age
            this.email = email
            this.mdp = mdp
        }
        const newMembre = new membre(nom = $nom,age = $age,email = $email,mdp = $mdp)
        let liste = JSON.parse(localStorage.getItem('list'));
        if (liste === null){
            liste = []
        }
        liste.push(newMembre);
        localStorage.setItem('list',JSON.stringify(liste));
    });

    $("#nom2").keyup(function (){
        let $nom = $("#nom2").val();
        membre = JSON.parse(localStorage.getItem($nom))
        if (localStorage.getItem($nom) === null){
            $("#erreurnom").removeClass("visible")}
        else {
            $("#erreurnom").addClass("visible")
        }
    })

    $("#submit2").click(function (){
        $email = $("#email2").val();
        $mdp = $("#password2").val();
        if ($mdp !== membre.mdp || $email !== membre.email){
            event.preventDefault();
            $("#erreurmdp").removeClass("visible");
        }
    })
