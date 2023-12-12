import { useRef } from "react";
import {
  Agenda,
  Day,
  Inject,
  Month,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Week,
} from "@syncfusion/ej2-react-schedule";

import { fieldsData, practitionersData, scheduleData } from "./datasource";

const CustomScheduler = () => {
  const scheduleRef = useRef(null);
  const today = new Date();

  const eventSettings = {
    dataSource: scheduleData,
    fields: fieldsData,
  };

  return (
    <div>
      <ScheduleComponent
        ref={scheduleRef}
        width="100%"
        height="550px"
        currentView="Week"
        selectedDate={today}
        eventSettings={eventSettings}
        group={{ resources: ["Practitioners"] }}
        resources={[
          {
            field: "PractitionerId",
            title: "Practitioner",
            name: "Practitioners",
            allowMultiple: false,
            dataSource: practitionersData,
            textField: "text",
            idField: "id",
            colorField: "color",
          },
        ]}
      >
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" />
          <ViewDirective option="Month" />
          <ViewDirective option="Agenda" />
        </ViewsDirective>
        <Inject services={[Day, Week, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
};

export default CustomScheduler;
