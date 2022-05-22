import React, { useState } from 'react';
import styles from './Organizations.module.css'
import OrganizationsCard from './OrganizationsCard/OrganizationsCard';
import AddOrgForm from './AddOrgForm/AddOrgForm';
import { useLocation } from 'react-router-dom';
import AddOrgButton from './AddOrgButton/AddOrgButton';
import Profile from '../Profile/Profile';

export default function Organizations() {

    const location = useLocation();
    const list = location.state.list;
    const userInfo = { userId: location.state.userId, userName: location.state.userName };

    function populateOrganizations() {
        return (list.map((x) => <OrganizationsCard org={x} userInfo={userInfo} />));
    }

    const [addClicked, setAddClicked] = useState(false);

    function updateAddClicked() {
        setAddClicked(e => !e);
    }

    return <div id={styles.outer}>
        <br />
        <Profile userInfo={userInfo} />

        <span>{list.length > 1 && "Select or "} Add an Organization</span>

        <div id={styles.orgList}>{populateOrganizations()}</div>

        <div id={styles.addOrg} onClick={updateAddClicked}><AddOrgButton /></div>

        {addClicked && <AddOrgForm />}
    </div>
}