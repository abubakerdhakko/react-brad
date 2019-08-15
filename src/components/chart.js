// // import React from "react";
// // import { render } from 'react-dom';
// // import Highcharts from 'highcharts';
// // import HighchartsReact from 'highcharts-react-official';

// // // import PropTypes from "proptypes";
// // const options = {
// //     chart: {
// //        backgroundColor: '#3e3d39',
// //         type: 'line'
       
// //     },
// //     title: {
// //       text: 'My chart'
// //     },
// //     series: [
// //       {
// //         data: [1, 2, 1, 4, 3, 6]
// //       }
// //     ]
// //   };

// // export default function Header(props) {
// //   return (

// //     <div>
// //     <HighchartsReact highcharts={Highcharts} options={options} />
// //    </div>
// //     );
// // }


// // // Header.defaultProps = {
// // //   branding: "My app"
// // // };

// // // Header.PropTypes = {
// // //   branding: PropTypes.string.isRequired
// // // };


// import React, { Component } from "react";
// import Chart from "react-apexcharts";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar"
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//         }
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 45, 50, 49, 60, 70, 91]
//         }
//       ]
//     };
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;