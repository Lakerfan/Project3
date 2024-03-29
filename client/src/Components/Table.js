import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 
const homes =
[
    { latitude:'33.7162594', longitude:'-118.2907653', image: 'https://odis.homeaway.com/odis/listing/11647d34-384b-44c1-aa7d-548b92eb3b4b.f6.jpg', address: "3036 S Denison Ave", home_type: "Single Level", rooms: "Two Bedroom", price: "$430,000", description:"A lovely two bedroom house, across the street from the local Airforce base. Located close to the Port of LA." },
    { latitude:'34.0567609', longitude:'-118.3750035', image: 'https://cdn.vox-cdn.com/thumbor/OMlAvhkt0ZJux2GuFT5u4l5ZwzA=/0x0:1080x659/1820x1213/filters:focal(454x244:626x416):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63855625/20_19462850_7_1557986616__1_.0.jpg', address: "3301 S  Alfred St  ", home_type: "Four  Plex ", rooms: "Four Bedroom", price: "$800,000", description:"A lovely two bedroom four plexhouse, across the street from the world famous Farmers Market Located close to the Beverly Center" },
    { latitude:'34.0413542', longitude:'-118.2552947', image: 'https://www.amlu.com/wp-content/uploads/2017/07/bieber-beyonce-music-video-producer-john-winters-sells-hip-loft-in-downtown-l-a-for-1-5m13-730x450.jpg', address: "909 S Main St", home_type: "Bachelor Loft", rooms: "Loft Style", price: "$430,000", description:"A lovely Loft, located in the heart of Downtown La's Business District." },
    { latitude:'34.0530109', longitude:'-118.374073', image: 'https://media.istockphoto.com/photos/home-and-healthy-front-yard-during-late-spring-season-picture-id957895328?k=6&m=957895328&s=612x612&w=0&h=jE3tvHz1gReCYq_8w5WtgjOGxd06S2E0vXHJpZRrfLM=', address: "1271 S Crescent Heights Blvd", home_type: "Single Level", rooms: "Four Bedroom", price: "$700,000", description:"A lovely four bedroom home, located in a stunning community on the outskirts of Beverly Hills." },
    { latitude:'34.0050694', longitude:'-118.3238328', image: 'https://ssl.cdn-redfin.com/photo/40/mbphoto/660/genMid.18-362660_1_4.jpg', address: "4315 4th Ave", home_type: "Single Level", rooms: "Two Bedroom", price: "2,000,000", description:"A lovely abode that's priceless, Located in the heart of LA at the corner of Nipsey Hussle Square and the historic Crenshaw Blvd." }
];

function TableRow(props) {
    return (
      <tr>
        <th class="th-sm" rowspan="1" colspan="1">{ReactHtmlParser(props.job.title)}</th>
        <th class="th-sm" rowspan="1" colspan="1">{ReactHtmlParser(props.job.description)}</th>
        <th class="th-sm" rowspan="1" colspan="1">{props.job.company.display_name}</th>
        <th class="th-sm" rowspan="1" colspan="1">Los Angeles</th>
      </tr>
    );
  }


function mapping(jobs) {
    return jobs.map(element => (<TableRow job={element} />))
}

function Table(props) {
  return (
      <>
    <table id="dtBasicExample" class="table table-striped dataTable" cellspacing="0" width="100%" srole="grid" aria-describedby="dtBasicExample_info">
      <thead>
        <tr role="row">
            <th class="th-sm sorting_asc">Job Title</th>
            <th class="th-sm sorting_asc">Description</th>
            <th class="th-sm sorting_asc">Company Name</th>
            <th class="th-sm sorting_asc">Location</th>
        </tr>
      </thead>
      <tbody id="tableBody">
      { mapping(props.jobs) }
      </tbody>
      <tfoot>
        <tr><th class="th-sm" rowspan="1" colspan="1">Title
          </th>
          <th class="th-sm" rowspan="1" colspan="1">Location</th>
          <th class="th-sm" rowspan="1" colspan="1">Company
          </th><th class="th-sm" rowspan="1" colspan="1">Salary
          </th><th class="th-sm" rowspan="1" colspan="1">Schedule
          </th></tr>
      </tfoot>
    </table>
    </>
  );
}

export default Table;
