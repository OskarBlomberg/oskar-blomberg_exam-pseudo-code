// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
START

SET variabel button = knappen i dokumentet
SET variabel summa = NUMBER INPUT  //NUMBER INPUT baseras på ett inputfält som bara tar sifferinput (annars, se raderna 35-77)
SET variabel friends = NUMBER INPUT  //Till exempel html-fält kan ju sättas på att ha minimivärde, så behöver inte kollas att det är positivt
SET variabel tipInput = NUMBER INPUT
SET variabel tip = toFloat(tipInput)

FUNCTION toFloat(number)
    IF (number innehåller %) THEN
        RETURN ta bort "%" och CALCULATE DELA PÅ 100
   ELSE
        RETURN number
    END IF-ELSE
END FUNCTION

FUNCTION splitTheNota(summa, tip, friends)
    RETURN CALCCULATE (summa PLUS (tip GÅNGER summma)) DELAT PÅ friends
END FUNCTION

WHEN (användaren klickar på button) THEN  // Hittade på WHEN som en beskrivining av en händelsebaserad programmering, typ addEventListener
    IF (summa har ett värde && friends har ett värde) THEN
        SET variabel toPay = CALL splitTheNota(summa, tip, friends)
        PRINT "Varje person ska betala {toPay}" // Kör måsvingar i stället för '"sträng" + variabel'. Blir rörigt i nästa uppgift annars.
    ELSE
        PRINT "Kolla att du har fyllt i summa och antal vänner som ska dela på notan."
    END IF-ELSE
END WHEN

END

Om vi inte har auto-validerande fält kan vi använda funktionerna, som får åkallas i stället för första IF-satsen när användaren har klickat på button:

FUNCTION isPositive(input)  // För summan
    TRY
        omvandla input till nummer
        IF (input <= 0) THEN
            PRINT "Talet måste vara positivt."
            RETURN false
        ELSE
            RETURN true
        END IF-ELSE
    CATCH
        PRINT "Ange ett positivt tal, endast i siffror."
        RETURN false
END FUNCTION

FUNCTION isInteger(input)  // För antal vänner
    TRY
        omvandla input till heltal
        IF (input <= 0) THEN
            PRINT "Talet måste vara positivt"
            RETURN false
        ELSE
            RETURN true
        END IF-ELSE
    CATCH
        PRINT "Ange ett positivt heltal, endast i siffror."
        RETURN false
END FUNCTION

FUNCTION isNumber(input)  // För dricksen
    TRY
        omvandla input till nummer
        IF (input < 0) THEN
            PRINT "Talet får inte vara negativt."
            RETURN false
        ELSE
            RETURN true
        END IF-ELSE
    CATCH
        PRINT "Ange dricks som decimaltal."
        RETURN false
END FUNCTION


*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

START
play();

FUNCTION play()
    SET variabel dictionary = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel targetWord till "FIVE"  // alt. random ord från dictionary
    SET variabel startWord till "FOUR"  // alt. random ord från dictionary som har samma antal tecken, men inte är samma ord
    SET variabel currentWord = startWord
    SET variabel tries = 0
    SET variabel gameOver = false

    PRINT "Målet är att hitta slutordet i så få steg som möjligt. Du får bara ändra en bokstav åt gången (vilken du vill) och orden måste vara giltiga engelska ord.
    
    WHILE (!gameOver)
        PRINT: "Ange ett ord på {antalet tecken i targetWord} bokstäver. Ordet du har är är: {currentWord}"
        SET variabel userInput = användarens input
        tries++
        IF (isSameLength(userInput, targetWord)) THEN // === true är underförstått
            IF isOneLetterApart(userInput, currentWord) THEN
                IF userInput === targetWord
                    gameOver = true  //Kollar gameOver innan ordlistan eftersom inDictionary är en längre operation. Sparar tid om man gissat rätt.
                END IF
                IF inDictionary(userInput)
                    currentWord = userInput
                ELSE
                    PRINT "Ordet finns inte i ordlistan."
                END IF-ELSE
            ELSE
                PRINT "Du får bara ändra en bokstav åt gången."
            END IF-ELSE
        ELSE
            PRINT "Ordet måste innehålla {längden på wordTwo} bokstäver."
        END IF-ELSE
    END WHILE
    PRINT "Rätt! Du hittade till {targetWord} från {startWord} på {tries} försök!"

             
END FUNCTION

FUNCTION isSameLength(wordOne, wordTwo)
    RETURN wordOne === längd på wordTwo
END FUNCTION

FUNCTION isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    FOR varje tecken i wordTwo, räkna med index `i` 
        IF wordOne[i] !== wordTwo[i] THEN
            diffCount++
        END IF
    END FOR
    RETURN diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
END FUNCTION

FUNCTION inDictionary(word)
    FOR varje ord i dictionary, räkna med index `i`
        IF (word === ord[i])
            RETURN true
        END IF
    END FOR
        RETURN false  // Hit når man ju bara om inget ord i loopen redan har returnerats
END FUNCTION

END
*/
