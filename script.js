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
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem.
    Eget magna fermentum iaculis eu non diam phasellus vestibulum.`,
    date: 'October 18, 2020',
    deadline: '10/17/2020',
  }));
  const $events = $('.events');
  events.forEach((event) => {
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
          <button class="button ${event.type.theme}">See detail</button>
        </div>
      </article>
    `)
  })
});
