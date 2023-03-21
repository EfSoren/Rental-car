import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import member4 from "../../assets/member4.png";
import member5 from "../../assets/member5.png";
import member6 from "../../assets/member6.png";

function TeamCards() {
  const teams = [
    {
      img: member1,
      memberName: "Caleb Johnson",
      title: "Manager",
    },
    {
      img: member2,
      memberName: "Mason Reed",
      title: "Sales",
    },
    {
      img: member3,
      memberName: "Harper Walsh",
      title: "Sales",
    },
    {
      img: member4,
      memberName: "Chloe Carter",
      title: "Customer Service",
    },
    {
      img: member5,
      memberName: "Leo Parker",
      title: "Customer Service",
    },
    {
      img: member6,
      memberName: "Rylee Bennett",
      title: "Human Resources",
    },
  ];
  return (
    <section className="team-wrapper">
      <h1>Our Team</h1>
      <div className="team-grid">
        {teams.map((member) => {
          return (
            <article key={member.img} className="team-member">
              <img src={member.img} />
              <div>
                <h1>{member.memberName}</h1>
                <h2>{member.title}</h2>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default TeamCards;
