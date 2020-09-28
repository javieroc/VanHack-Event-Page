$(document).ready(function() {
  const eventTypes = [
    {
      name: 'webinar',
      label: 'WEBINAR',
      theme: 'dark',
    },
    {
      name: 'webinar premium',
      label: 'WEBINAR <span>PREMIUM</span>',
      theme: 'dark',
    },
    {
      name: 'meetup',
      label: 'Meetup',
      theme: 'dark',
    },
    {
      name: 'leap',
      label: 'Leap',
      theme: 'dark',
    },
    {
      name: 'van-hackaton',
      label: 'VanHackaton',
      theme: 'light',
    },
    {
      name: 'mission',
      label: 'Mission 🚀 🚀',
      theme: 'light',
    },
  ];

  const events = Array(12).fill(0).map((event) => ({
    type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
    name: 'This is a Event',
    description: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Cras adipiscing enim eu turpis. Quis varius quam quisque id.
      At urna condimentum mattis pellentesque id nibh tortor id aliquet.
      Nunc consequat interdum varius sit amet mattis vulputate enim.
      Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.
      Id volutpat lacus laoreet non curabitur gravida arcu ac.
      Eleifend quam adipiscing vitae proin. Sit amet nisl purus in mollis nunc sed id semper.
      Vulputate eu scelerisque felis imperdiet proin fermentum leo vel.
      Et sollicitudin ac orci phasellus egestas tellus rutrum tellus.
      Tellus pellentesque eu tincidunt tortor aliquam nulla.
      Accumsan tortor posuere ac ut consequat semper viverra.
      Nulla malesuada pellentesque elit eget gravida cum sociis natoque.
      Sit amet aliquam id diam maecenas. Quam id leo in vitae turpis massa.`,
      `Ac tortor vitae purus faucibus ornare suspendisse sed nisi.
      Lobortis elementum nibh tellus molestie nunc non blandit. Magna etiam tempor orci eu lobortis.
      Turpis massa sed elementum tempus egestas sed sed risus pretium.
      Enim neque volutpat ac tincidunt vitae semper quis lectus. Enim eu turpis egestas pretium.
      In ornare quam viverra orci sagittis eu. Iaculis nunc sed augue lacus viverra vitae congue eu consequat.
      Duis at consectetur lorem donec massa sapien faucibus et. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum.
      Odio euismod lacinia at quis risus sed. Quam vulputate dignissim suspendisse in est.
      Lobortis mattis aliquam faucibus purus in massa tempor. Dignissim cras tincidunt lobortis feugiat vivamus.
      Sed risus pretium quam vulputate dignissim suspendisse in est. Volutpat lacus laoreet non curabitur gravida arcu ac tortor.
      Amet facilisis magna etiam tempor. Nunc id cursus metus aliquam eleifend mi in. Et egestas quis ipsum suspendisse.
      Sodales neque sodales ut etiam.`,
    ],
    date: 'October 18, 2020',
    deadline: '10/17/2020',
  }));

  const $events = $('.events');

  events.forEach((event, index) => {
    $events.append(`
      <article class="event ${event.type.name}">
        <div>
          <h3>${event.type.label}</h3>
        </div>
        <div>
          <h2>${event.name}</h2>
          <div>Event Date:${event.date}</div>
          <div>Deadline: ${event.deadline}</div>
        </div>
        <div>
          <button id="${index}" class="button ${event.type.theme}">See detail</button>
        </div>
      </article>
    `)
  })

  const $modal = $('.modal');
  const $buttons = $('.button').click(function() {
    const id = $(this).attr('id');
    $('.modal-header').html(`
      <h1>Event: ${events[id].name}</h1>
    `)
    const paragraphs = events[id].description.map((paragraph) => (`
      <p>${paragraph}</p>
    `))
    $('.modal-body').html(paragraphs.join(''))
    $modal.show()
  });

  window.onclick = function(event) {
    if (event.target == $modal[0]) {
      $modal.hide();
    }
  }
});
