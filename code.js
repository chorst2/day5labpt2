$(document).ready(
    function () {
        //add all event listener (clicks, etc.)
        $("#quantity,#quantity2").change(textboxHeardChange);

        //any other functions (calculate trip, roll die, etc.)
        function textboxHeardChange()
        {
            var firstProductPrice = 39.99;
            var firstProductQuantity = $("#quantity").val();
            firstProductQuantity = parseFloat(firstProductQuantity);

            var firstProductTotal = firstProductQuantity*firstProductPrice;
            $("#firstProductTotal").text(firstProductTotal);

            var secondProductPrice = 14.99;
            var secondProductQuantity = $("#quantity2").val();
            secondProductQuantity = parseFloat(secondProductQuantity);

            var secondProductTotal = secondProductQuantity*secondProductPrice;
            $("#secondProductTotal").text(secondProductTotal);

            var grandTotal = firstProductTotal + secondProductTotal;
            $("#grandTotal").text(grandTotal);
        }

    }
);