import { MatchCardComponent } from "./matchCard";

const users = [
  { num: "1", name: "Henry", info: "hello", price: "$5", status: "Approved" },
  { num: "2", name: "George", info: "wow", price: "$105", status: "Pending" },
  {
    num: "3",
    name: "Brian",
    info: "bazinga",
    price: "$12",
    status: "Rejected",
  },
];

const MatchComponent = () => {
  return (
    <div className="matches">
      {users.map((user) => (
        <MatchCardComponent
          num={user.num}
          name={user.name}
          info={user.info}
          price={user.price}
          status={user.status}
        />
      ))}
    </div>
  );
};

export default MatchComponent;
