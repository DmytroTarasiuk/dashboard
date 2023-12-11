import { useEffect, useRef } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {
  Day,
  Inject,
  Month,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";

const Scheduler = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const buttonObj = useRef<ButtonComponent>(null);
  const today = new Date();
  let scheduleData: Object[] = [
    {
      Id: 3,
      Subject: "Testing",
      StartTime: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        9,
        0,
      ),
      EndTime: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        10,
        0,
      ),
      IsAllDay: false,
    },
    {
      Id: 4,
      Subject: "Vacation",
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
        30,
      ),
      IsAllDay: false,
    },
  ];
  const eventSettings = { dataSource: scheduleData };

  const onAddClick = (): void => {
    let Data: Object[] = [
      {
        Id: 1,
        Subject: "Conference",
        StartTime: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          9,
          0,
        ),
        EndTime: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          10,
          0,
        ),
        IsAllDay: false,
      },
      {
        Id: 2,
        Subject: "Meeting",
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
          30,
        ),
        IsAllDay: false,
      },
    ];
    scheduleObj.current.addEvent(Data);
    buttonObj.current.element.setAttribute("disabled", "true");
  };

  useEffect(() => {
    const removeElement = () => {
      const body = document.querySelector("body");

      if (body.childNodes[8]) {
        body.childNodes[8].remove();
      }
    };

    removeElement();
  }, []);

  return (
    <div>
      <ButtonComponent
        id="add"
        title="Add"
        ref={buttonObj}
        onClick={onAddClick}
      >
        Add
      </ButtonComponent>
      <ScheduleComponent
        ref={scheduleObj}
        width="100%"
        height="550px"
        selectedDate={today}
        eventSettings={eventSettings}
      >
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" />
          <ViewDirective option="WorkWeek" />
          <ViewDirective option="Month" />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month]} />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;
