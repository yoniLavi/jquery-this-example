$(document).ready(function() {
    $(".box").on("click", function() {
        // First, remove the chosen-box class from all boxes
        $(".box").removeClass("chosen-box");

        // Now, only add the class to those from the class matching
        // the box-group of the clicked box.
        var boxGroup = $(this).data("box-group");
        $('.'+boxGroup).addClass("chosen-box");
    });
});
