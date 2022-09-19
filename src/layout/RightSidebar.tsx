import ButtonLink from '../components/ButtonLink';

const RightSidebar = () => {
  return (
    <div>
      <h4>DISCOVER MORE OF WHAT MATTERS TO YOU</h4>
      <div>
        <ul className="right-sidebar__tag-list">
          <li className="right-sidebar__tag">
            <ButtonLink link="#" text="Javascript" type="secondary"></ButtonLink>
          </li>
          <li className="right-sidebar__tag">
            <ButtonLink link="#" text="Serverless" type="secondary"></ButtonLink>
          </li>
          <li className="right-sidebar__tag">
            <ButtonLink link="#" text="AWS architecture" type="secondary"></ButtonLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RightSidebar;
