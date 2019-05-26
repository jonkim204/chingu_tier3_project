import React from "react";
import { Table, Skeleton } from "antd";
import moment from 'moment';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Id", dataIndex: "id", key: "id" },
      { title: "NameType", dataIndex: "nametype", key: "nametype" },
      { title: "RecClass", dataIndex: "recclass", key: "recclass" },
      { title: "Mass (g)", dataIndex: "mass", key: "mass" },
      { title: "Fall", dataIndex: "fall", key: "fall" },
      { title: "Year", render: year => {
          return <span>{moment(year).format('YYYY')}</span>
      },  dataIndex: "year", key: "year",},
      { title: "Latitude", dataIndex: "geolocation.latitude", key: "latitude" },
      { title: "Longitude", dataIndex: "geolocation.longitude", key: "longitude"}
    ];
  }

  render() {
    return this.props.isDataLoaded ? (
      <Table
        className="results"
        columns={this.columns}
        dataSource={this.props.meteorites}
        rowKey={row => row.id}
      />
    ) : (
      <Skeleton active />
    );
  }
}

export default Results;