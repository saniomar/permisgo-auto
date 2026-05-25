import { useState, useMemo } from "react";
import appointmentCalanderCss from "../styles/appointment-booking-calander.module.css"

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const WEEKDAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const TIME_SLOTS = ["11:00 AM", "02:00 PM", "04:00 PM", "05:00 PM"];

export default function AppointmentBooking() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({
    courseTitle: "",
    instructor: "",
    date: "",
    time: "",
    duration: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const calendarCells = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrev = new Date(year, month, 0).getDate();
    const cells = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      cells.push({ day: daysInPrev - i, muted: true, date: new Date(year, month - 1, daysInPrev - i) });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ day: d, muted: false, date: new Date(year, month, d) });
    }
    let next = 1;
    while (cells.length % 7 !== 0 || cells.length < 42) {
      cells.push({ day: next, muted: true, date: new Date(year, month + 1, next) });
      next++;
      if (cells.length >= 42) break;
    }
    return cells;
  }, [viewDate]);

  const isSameDay = (a, b) =>
    a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...form, date: selectedDate, time: selectedTime });
    alert("Appointment booked!");
  };

  const formatHeader = (d) =>
    `${d.toLocaleString("en-US", { weekday: "short" })}, ${d.toLocaleString("en-US", { month: "long" })}, ${d.getDate()}`;

  return (
    <div className="py-5" id={appointmentCalanderCss.ab_wrapper}>
      <div className="container-fluid">
        <h2 className="text-center fw-bold mb-4" id={appointmentCalanderCss.ab_title}>Appointment Booking Form</h2>
        <div className="p-3 p-md-4" id={appointmentCalanderCss.ab_card}>
          <div className="row g-3">
            {/* LEFT: FORM */}
            <div className="col-lg-6">
              <div className="p-3 p-md-4 h-100" id={appointmentCalanderCss.ab_panel}>
                <p className="mb-1" id={appointmentCalanderCss.ab_subtle}>PermisGo Driving School</p>
                <h4 className="fw-bold mb-2">Your Appointment with PermisGo</h4>
                <p className="text-muted small mb-4">
                  To schedule an appointment, please fill out the information below.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label small" id={appointmentCalanderCss.form_label}>Course Title</label>
                    <input type="text" name="courseTitle" className="form-control form-control-lg" id={appointmentCalanderCss.formControlField} value={form.courseTitle} onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small" id={appointmentCalanderCss.form_label}>Choose Instructor</label>
                    <select name="instructor" className="form-select" id={appointmentCalanderCss.formControlField} value={form.instructor} onChange={handleChange}>
                      <option value="">Select instructor</option>
                      <option>John Doe</option>
                      <option>Marie Curie</option>
                      <option>Alex Smith</option>
                    </select>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label className="form-label small" id={appointmentCalanderCss.form_label}>Select Date</label>
                      <input type="date" className="form-control form-control-lg" id={appointmentCalanderCss.formControlField}
                        value={selectedDate.toISOString().slice(0,10)}
                        onChange={(e)=>setSelectedDate(new Date(e.target.value))}/>
                    </div>
                    <div className="col-6">
                      <label className="form-label small" id={appointmentCalanderCss.form_label}>Select Time</label>
                      <select className="form-select" value={selectedTime} onChange={(e)=>setSelectedTime(e.target.value)}>
                        <option value="">--:--</option>
                        {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label className="form-label small" id={appointmentCalanderCss.form_label}>Duration</label>
                      <select name="duration" className="form-select" id={appointmentCalanderCss.formControlField} value={form.duration} onChange={handleChange}>
                        <option value="">Select</option>
                        <option>30 min</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label className="form-label small" id={appointmentCalanderCss.form_label}>Your Name</label>
                      <input type="text" name="name" className="form-control form-control-lg" id={appointmentCalanderCss.formControlField} value={form.name} onChange={handleChange}/>
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label className="form-label small" id={appointmentCalanderCss.form_label}>Email Address</label>
                      <input type="email" name="email" className="form-control form-control-lg" id={appointmentCalanderCss.formControlField} value={form.email} onChange={handleChange}/>
                    </div>
                    <div className="col-6">
                      <label className="form-label small" id={appointmentCalanderCss.form_label}>Phone Number</label>
                      <input type="tel" name="phone" className="form-control form-control-lg" id={appointmentCalanderCss.formControlField} value={form.phone} onChange={handleChange}/>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label small" id={appointmentCalanderCss.form_label}>Additional Notes</label>
                    <textarea name="notes" rows="3" className="form-control form-control-lg" id={appointmentCalanderCss.formControlField} placeholder="Write here" value={form.notes} onChange={handleChange}/>
                  </div>

                  <button type="submit" className="btn w-100 fw-semibold" id={appointmentCalanderCss.ab_submit}>Submit</button>
                </form>
              </div>
            </div>

            {/* RIGHT: CALENDAR */}
            <div className="col-lg-6">
              <div className="ab-panel p-3 p-md-4 h-100 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="mb-0 fw-semibold">
                    {MONTHS[viewDate.getMonth()]} {viewDate.getDate?.() || ""} {viewDate.getFullYear()}
                  </h6>
                  <div className="d-flex gap-2">
                    <button type="button" className={appointmentCalanderCss.ab_nav_btn}
                      onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}>‹</button>
                    <button type="button" className={appointmentCalanderCss.ab_nav_btn}
                      onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}>›</button>
                  </div>
                </div>

                <div className="mb-3" id={appointmentCalanderCss.ab_calendar}>
                  <div className={`${appointmentCalanderCss.ab_cal_grid} ${appointmentCalanderCss.ab_cal_head}`}>
                    {WEEKDAYS.map((d) => <div key={d} className={`${appointmentCalanderCss.ab_cal_cell} ${appointmentCalanderCss.ab_cal_weekday}`}>{d}</div>)}
                  </div>
                  <div className={`${appointmentCalanderCss.ab_cal_grid}`}>
                    {calendarCells.map((c, i) => {
                      const active = isSameDay(c.date, selectedDate) && !c.muted;
                      return (
                        <button key={i} type="button"
                          className={`${appointmentCalanderCss.ab_cal_cell} ab_cal_day ${c.muted ? "muted" : ""} ${active ? "active" : ""}`}
                          onClick={() => !c.muted && setSelectedDate(c.date)}>
                          {String(c.day).padStart(2, "0")}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-3 mt-auto" id={appointmentCalanderCss.ab_slots_card}>
                  <p className="fw-semibold mb-3">{formatHeader(selectedDate)}</p>
                  <div className="row g-2">
                    {TIME_SLOTS.map((t) => (
                      <div className="col-6" key={t}>
                        <button type="button"
                          className={`ab_slot w-100 ${selectedTime === t ? "active" : ""}`}
                          onClick={() => setSelectedTime(t)}>
                          {t}
                        </button>
                      </div>
                    ))}
                  </div>
                  <p className="small text-muted mt-3 mb-0">🌐 France/ Paris (09:00 PM) ▾</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
