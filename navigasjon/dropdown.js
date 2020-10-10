var items = [
  {
    name: 'Vestland',
    value: 'vestland',
    subitems: [{
        name: 'Bergen, Sandviken',
        value: 'ladepunkt/sandviken.html'
      }
    ]
  },
  {
    name: 'Agder',
    value: 'agder',
    subitems: [{
        name: 'Kristiansand, Lund',
        value: 'ladepunkt/lund.html'
      }
    ]
  },
  {
    name: 'Oslo',
    value: 'oslo',
    subitems: [{
        name: 'Oslo, Grünerløkka',
        value: 'ladepunkt/grunerloekka.html'
      }
    ]
  },
  {
    name: 'Finnmark',
    value: 'finnmark',
    subitems: [{
        name: 'Tromsø, Håpet',
        value: 'ladepunkt/haapet.html'
      }
    ]
  },
  {
    name: 'Trøndelag',
    value: 'trøndelag',
    subitems: [{
        name: 'Trondheim, Midtbyen',
        value: 'ladepunkt/midtbyen.html'
      }
    ]
  },
  {
    name: 'Møre og Romsdal',
    value: 'møre og romsdal',
    subitems: [{
        name: 'Ålesund, Nørvasundet',
        value: 'ladepunkt/noervasundet.html'
      }
    ]
  }
];


$(function() {
  var temp = {};

  $.each(items, function() {
    $("<option />")
      .attr("value", this.value)
      .html(this.name)
      .appendTo("#fylke");
    temp[this.value] = this.subitems;
  });

  $("#fylke").change(function() {
    var value = $(this).val();
    var menu = $("#ladepunkt");

    menu.empty();
    $.each(temp[value], function() {
      $("<option />")
        .attr("value", this.value)
        .html(this.name)
        .appendTo(menu);
    });
  }).change();


});