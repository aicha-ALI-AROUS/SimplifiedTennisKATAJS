function TennisScore (marque, joueur1, joueur2) {
    let result="";
    switch(marque.score) {
        case 0:
          marque.score=15;
          marque.scoreAffichage="Fifteen";
          result= ("Joueur1: "+joueur1.scoreAffichage+" - Joueur2: "+joueur2.scoreAffichage);
          break;
        case 15:
          marque.score=30;
          marque.scoreAffichage="Thirty";
          result= ("Joueur1: "+joueur1.scoreAffichage+" - Joueur2: "+joueur2.scoreAffichage);
          break;
        case 30:
            switch(marque){
                case joueur1:
                    if(joueur2.score===40){
                        marque.score=40; 
                        marque.scoreAffichage="Deuce";
                        joueur2.scoreAffichage="Deuce";
                        result= ("Joueur1: "+joueur1.scoreAffichage+" - Joueur2: "+joueur2.scoreAffichage);
                    }
                    else{
                        marque.score=40;
                        marque.scoreAffichage="Forty";
                        result= ("Joueur1: "+joueur1.scoreAffichage+" - Joueur2: "+joueur2.scoreAffichage);
                    }
                    break;
                case joueur2:
                     if(joueur1.score===40){
                        marque.score=40; 
                        marque.scoreAffichage="Deuce";
                        joueur1.scoreAffichage="Deuce";
                        result= ("Joueur1: "+joueur1.scoreAffichage+" - Joueur2: "+joueur2.scoreAffichage);
                    }
                    else{
                        marque.score=40;
                        marque.scoreAffichage="Forty";
                        result= ("Joueur1: "+joueur1.scoreAffichage+" - Joueur2: "+joueur2.scoreAffichage);
                    }
                    break;
            }
            break;
        case 40:
            switch(marque){
                case joueur1:
                    if(joueur2.score<40){
                        //le joueur1 a gagné un jeu
                        result= ("le joueur "+joueur1.name+" a gagnee le match");
                    }
                    else if(joueur2.score===40){
                        marque.score=50;
                        marque.scoreAffichage="AD";
                        joueur2.scoreAffichage="Forty";
                        result= ("Joueur1: "+joueur1.scoreAffichage+" - Joueur2: "+joueur2.scoreAffichage);
                    }
                    else {
                       marque.score=40;
                       marque.scoreAffichage="Deuce";
                       joueur2.score=40; 
                       joueur2.scoreAffichage="Deuce";
                       result= ("Joueur1: "+joueur1.scoreAffichage+" - Joueur2: "+joueur2.scoreAffichage);
                    }
                    break;
                case joueur2:
                    if(joueur1.score<40){
                        //le joueur2 a gagné un jeu
                        result= ("le joueur "+joueur2.name+" a gagnee le match");
                    }
                    else if(joueur1.score===40){
                        marque.score=50;
                        marque.scoreAffichage="AD";
                        joueur1.scoreAffichage="Forty";
                        result= ("Joueur1: "+joueur1.scoreAffichage+" - Joueur2: "+joueur2.scoreAffichage);
                    }
                    else {
                       marque.score=40;
                       marque.scoreAffichage="Deuce";
                       joueur1.score=40; 
                       joueur1.scoreAffichage="Deuce";
                       result= ("Joueur1: "+joueur1.scoreAffichage+" - Joueur2: "+joueur2.scoreAffichage);
                    }
                    break;
            }
            break;
        case 50:
            switch(marque){
                case joueur1:
                        //le joueur1 a gagné le jeu
                        result= ("le joueur "+joueur1.name+" a gagnee le match");
                    break;
                case joueur2:
                        //le joueur2 a gagné le jeu
                        result= ("le joueur "+joueur2.name+" a gagnee le match");
                    break;
            }
            break;
    }
    return result;
}

module.exports = TennisScore