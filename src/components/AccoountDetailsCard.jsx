export default function accountDetailsCard({ details }) {
  return (
    <div className="card infoCard">
      <h2 className="cardTitle">Account Details</h2>
      <div className="rows">
        <Row label="Role" value={details.role}></Row>
        <Row label="Status" value={<span className="pill">Active</span>}></Row>
        <Row
          label="Verification"
          value={<span className="verified">Verified</span>}
        ></Row>
      </div>
    </div>
  );
}
