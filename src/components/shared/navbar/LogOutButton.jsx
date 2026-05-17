import { ArrowRightFromSquare } from '@gravity-ui/icons';
import { Dropdown, Label } from '@heroui/react';
import React from 'react';

const LogOutButton = () => {
    return <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                <div className="flex w-full items-center justify-between gap-2">
                  <Label>Log Out</Label>
                  <ArrowRightFromSquare className="size-3.5 text-danger" />
                </div>
              </Dropdown.Item>
};

export default LogOutButton;