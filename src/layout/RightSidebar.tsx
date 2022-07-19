const RightSidebar = () => {
  return (
    <div>
      <h4>DISCOVER MORE OF WHAT MATTERS TO YOU</h4>
      <div>
        <ul>
          {[1, 2, 3, 4].map((key) => (
            <li className="right-sidebar__tag" key={key}>
              <a href="/">Javascript</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RightSidebar;
