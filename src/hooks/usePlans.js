import { useEffect, useState } from "react";

const usePlans = (id) => {
  const [bookPlan, setBookPlan] = useState({});
  useEffect(() => {
    fetch(`https://vast-beach-32401.herokuapp.com/plans/`)
      .then((res) => res.json())
      .then((data) => {
        setBookPlan(data);
      });
  }, []);

  return { bookPlan };
};
export default usePlans;
