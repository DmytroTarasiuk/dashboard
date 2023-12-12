export const practitionersData: Object[] = [
  { text: "Dr. Smith", id: 1, color: "#cb6bb2" },
  { text: "Dr. Johnson", id: 2, color: "#56ca85" },
];

const today = new Date();

export const scheduleData = [
  {
    Id: 1,
    Subject: "Patient 1",
    StartTime: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      10,
      0,
    ),
    EndTime: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      11,
      0,
    ),
    PractitionerId: 1,
  },
  {
    Id: 2,
    Subject: "Patient 2",
    StartTime: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      10,
      0,
    ),
    EndTime: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      11,
      0,
    ),
    PractitionerId: 2,
  },
];

export const fieldsData = {
  id: "Id",
  subject: { name: "Subject", title: "Patient" },
  location: { name: "Location", title: "Location" },
  description: { name: "Description", title: "Service" },
  startTime: { name: "StartTime", title: "Start Duration" },
  endTime: { name: "EndTime", title: "End Duration" },
};
