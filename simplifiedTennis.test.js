const { expect } = require('@jest/globals');
const TennisScore = require('./simplifiedTennis');

test('test the Tennis game score', () =>{
    //creation de l'objet joueur1
    let joueur1 = {
        name:"Joueur1",
        score:0,
        scoreAffichage:"Love"
    }
    //ceation de l'objet joueur2
    let joueur2 = {
        name:"Joueur2",
        score:0,
        scoreAffichage:"Love"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("Joueur1: Fifteen - Joueur2: Love");

    joueur1 = {
        name:"Joueur1",
        score:15,
        scoreAffichage:"Fifteen"
    }
    joueur2 = {
        name:"Joueur2",
        score:0,
        scoreAffichage:"Love"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("Joueur1: Thirty - Joueur2: Love");

    joueur1 = {
        name:"Joueur1",
        score:30,
        scoreAffichage:"Thiry"
    }
    joueur2 = {
        name:"Joueur2",
        score:0,
        scoreAffichage:"Love"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("Joueur1: Forty - Joueur2: Love");

    joueur1 = {
        name:"Joueur1",
        score:40,
        scoreAffichage:"Forty"
    }
    joueur2 = {
        name:"Joueur2",
        score:0,
        scoreAffichage:"Love"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("le joueur Joueur1 a gagnee le match");

    joueur1 = {
        name:"Joueur1",
        score:0,
        scoreAffichage:"Love"
    }
    joueur2 = {
        name:"Joueur2",
        score:0,
        scoreAffichage:"Love"
    }
    expect(TennisScore(joueur2,joueur1,joueur2)).toEqual("Joueur1: Love - Joueur2: Fifteen");

    joueur1 = {
        name:"Joueur1",
        score:0,
        scoreAffichage:"Love"
    }
    joueur2 = {
        name:"Joueur2",
        score:15,
        scoreAffichage:"Fifteen"
    }
    expect(TennisScore(joueur2,joueur1,joueur2)).toEqual("Joueur1: Love - Joueur2: Thirty");

    joueur1 = {
        name:"Joueur1",
        score:0,
        scoreAffichage:"Love"
    }
    joueur2 = {
        name:"Joueur2",
        score:30,
        scoreAffichage:"Thirty"
    }
    expect(TennisScore(joueur2,joueur1,joueur2)).toEqual("Joueur1: Love - Joueur2: Forty");

    joueur1 = {
        name:"Joueur1",
        score:0,
        scoreAffichage:"Love"
    }
    joueur2 = {
        name:"Joueur2",
        score:40,
        scoreAffichage:"Fifteen"
    }
    expect(TennisScore(joueur2,joueur1,joueur2)).toEqual("le joueur Joueur2 a gagnee le match");

    joueur1 = {
        name:"Joueur1",
        score:0,
        scoreAffichage:"Love"
    }
    joueur2 = {
        name:"Joueur2",
        score:15,
        scoreAffichage:"Fifteen"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("Joueur1: Fifteen - Joueur2: Fifteen");

    joueur1 = {
        name:"Joueur1",
        score:30,
        scoreAffichage:"Thirty"
    }
    joueur2 = {
        name:"Joueur2",
        score:15,
        scoreAffichage:"Fifteen"
    }
    expect(TennisScore(joueur2,joueur1,joueur2)).toEqual("Joueur1: Thirty - Joueur2: Thirty");

    joueur1 = {
        name:"Joueur1",
        score:40,
        scoreAffichage:"Forty"
    }
    joueur2 = {
        name:"Joueur2",
        score:30,
        scoreAffichage:"Thirty"
    }
    expect(TennisScore(joueur2,joueur1,joueur2)).toEqual("Joueur1: Deuce - Joueur2: Deuce");

    joueur1 = {
        name:"Joueur1",
        score:30,
        scoreAffichage:"Thirty"
    }
    joueur2 = {
        name:"Joueur2",
        score:40,
        scoreAffichage:"Forty"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("Joueur1: Deuce - Joueur2: Deuce");

    joueur1 = {
        name:"Joueur1",
        score:0,
        scoreAffichage:"Love"
    }
    joueur2 = {
        name:"Joueur2",
        score:30,
        scoreAffichage:"Thirty"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("Joueur1: Fifteen - Joueur2: Thirty");

    joueur1 = {
        name:"Joueur1",
        score:0,
        scoreAffichage:"Love"
    }
    joueur2 = {
        name:"Joueur2",
        score:40,
        scoreAffichage:"Forty"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("Joueur1: Fifteen - Joueur2: Forty");

    joueur1 = {
        name:"Joueur1",
        score:15,
        scoreAffichage:"Fifteen"
    }
    joueur2 = {
        name:"Joueur2",
        score:40,
        scoreAffichage:"Forty"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("Joueur1: Thirty - Joueur2: Forty");

    joueur1 = {
        name:"Joueur1",
        score:40,
        scoreAffichage:"Deuce"
    }
    joueur2 = {
        name:"Joueur2",
        score:40,
        scoreAffichage:"Deuce"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("Joueur1: AD - Joueur2: Forty");

    joueur1 = {
        name:"Joueur1",
        score:40,
        scoreAffichage:"Deuce"
    }
    joueur2 = {
        name:"Joueur2",
        score:40,
        scoreAffichage:"Deuce"
    }
    expect(TennisScore(joueur2,joueur1,joueur2)).toEqual("Joueur1: Forty - Joueur2: AD");

    joueur1 = {
        name:"Joueur1",
        score:50,
        scoreAffichage:"AD"
    }
    joueur2 = {
        name:"Joueur2",
        score:40,
        scoreAffichage:"Forty"
    }
    expect(TennisScore(joueur2,joueur1,joueur2)).toEqual("Joueur1: Deuce - Joueur2: Deuce");

    joueur1 = {
        name:"Joueur1",
        score:40,
        scoreAffichage:"Forty"
    }
    joueur2 = {
        name:"Joueur2",
        score:50,
        scoreAffichage:"AD"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("Joueur1: Deuce - Joueur2: Deuce");

    joueur1 = {
        name:"Joueur1",
        score:40,
        scoreAffichage:"Forty"
    }
    joueur2 = {
        name:"Joueur2",
        score:50,
        scoreAffichage:"AD"
    }
    expect(TennisScore(joueur2,joueur1,joueur2)).toEqual("le joueur Joueur2 a gagnee le match");

    joueur1 = {
        name:"Joueur1",
        score:50,
        scoreAffichage:"AD"
    }
    joueur2 = {
        name:"Joueur2",
        score:40,
        scoreAffichage:"Forty"
    }
    expect(TennisScore(joueur1,joueur1,joueur2)).toEqual("le joueur Joueur1 a gagnee le match"); 

})