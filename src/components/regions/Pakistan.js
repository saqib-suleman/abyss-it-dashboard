import { React } from "react";
import Card from "../Card";
import CardsWrapper from "../CardsWrapper";

const links = {
  admin_helpdesk:
    "https://abyss-solutions.atlassian.net/servicedesk/customer/portal/5",
  it_service_desk:
    "https://abyss-solutions.atlassian.net/servicedesk/customer/portal/2",
};

function Pakistan() {
  return (
    <div>
      <CardsWrapper>
        <Card text={"Admin Helpdesk"} link={links.admin_helpdesk} />
        <Card text={"IT Service Desk"} link={links.it_service_desk} />
      </CardsWrapper>
    </div>
  );
}

export default Pakistan;
