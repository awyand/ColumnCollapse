$(document).ready(function() {

  // Populate HTML

  // For every number between 1 and 16
  for (i=1; i <= 16; i++) {
    // Make a row
    var newRow = $("<div>");
    newRow.addClass("row");

    // Add i columns to the row
    for (j=0; j < i; j++) {
      // Make column prototype
      var newColumn = $("<div>");
      newColumn.addClass("column");
      newColumn.css("width", `calc(100%/${i})`);
      newColumn.text(`1/${i}`);
      // Append to newRow
      newRow.append(newColumn);
    }

    // Add newRow to HTML
    $("body").append(newRow);

  }

  // Column click Logic
  $(".column").on("click", function() {
    // Save target's parent row as a variable
    var targetParent = this.closest(".row");
    // Save target's sibling columns to a variable
    var siblings = $(targetParent).children(".column");
    // Save number of target's sibling columns to a variable
    var numberOfSiblings = $(targetParent).children(".column").length - 1;

    // Set each sibling's width to (100% / numberOfSiblings)
    siblings.css("width", `calc(100%/${numberOfSiblings})`);
    // Set each sibling's text to the new fraction
    siblings.text(`1/${numberOfSiblings}`);

    // Remove clicked column
    $(this).remove();
  })
});
