$(document).ready(function () {
            
    var attackerChosen = false;
    var defenderChosen = false;
    var fighter1;
    var fighter2;
    var win = 0;
    var people = {
        solo: {
            health_points: 150,
            attack_power: 20,
        },
        batman: {
            health_points: 100,
            attack_power: 10,
        },
        sideous: {
            health_points: 120,
            attack_power: 16,
        },
        obi: {
            health_points: 80,
            attack_power: 12,
        }
    };
    function reset() {
        location.reload();
    }

    $("#reset").on("click", function () {
        reset()            
    });

    $(".players").on("click", function () {
        var who = this.getAttribute('id');
        var person = people[who];
        if (attackerChosen == false) {
            attackerChosen = true;
            $(this).appendTo(".attacker");
            $(".pics .players").appendTo(".enemies");
            fighter1 = person;
        } else if (defenderChosen == false && fighter1.health_points !== person.health_points) {
            defenderChosen = true;
            $(this).appendTo(".defender");
            fighter2 = person;
        } else {
            ;
        }
    });

    $('#attack').on('click', function () {
        if (attackerChosen && defenderChosen) {
            fighter2.health_points -= fighter1.attack_power;
            fighter1.health_points -= fighter2.attack_power;
            $('.attacker').find('.hpp').text(fighter1.health_points);
            $('.defender').find('.hpp').text(fighter2.health_points);
            $('.attacker').find('.hpp1').text(" / " + fighter1.attack_power);
           $('.defender').find('.hpp1').text(" / " + fighter2.attack_power);

            if (fighter1.health_points <= 0) {
                alert("You Lost! Restart the game.");
                // reset();
            }
            if (fighter2.health_points <= 0) {
                win++;
                alert("You Won!");
                defenderChosen = false;
                figher2 = null;
                var x = 10;
                fighter1.attack_power += 10 + x;
                $('.defender').html('');
            }

            if (3 === win){
                alert("The game is over! Restart the Game to play more");
            }

        }
    });
        
});