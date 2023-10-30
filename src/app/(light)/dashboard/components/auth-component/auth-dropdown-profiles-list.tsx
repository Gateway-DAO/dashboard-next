'use client';
import { useSession } from 'next-auth/react';

import GTWAvatar from '@/components/gtw-avatar/gtw-avatar';
import MenuItemLink from '@/components/menu-item-link/menu-item-link';
import routes from '@/constants/routes';
import useOrganization from '@/hooks/use-organization';

import {
  Chip,
  Divider,
  ListItemIcon,
  ListItemText,
  alpha,
} from '@mui/material';

type Props = {
  onClose: () => void;
};

export default function AuthDropdownProfilesList({ onClose }: Props) {
  const { data: session } = useSession();

  const { isOrg, organization } = useOrganization();

  if (!session) return null;

  const { user } = session;

  const accessess = isOrg
    ? user.accesses?.filter(
        ({ organization: accessOrganization }) =>
          accessOrganization.id !== organization.id
      )
    : user.accesses;

  if (!user.accesses?.length) return null;

  return (
    <>
      {accessess?.map(({ organization }) => (
        <MenuItemLink
          href={routes.dashboard.org.home(organization.gatewayId)}
          key={organization.id}
          onClick={onClose}
        >
          <ListItemIcon>
            <GTWAvatar
              src={organization.image ?? null}
              name={organization.image ? organization.name : organization.id}
              hasBorder={!!organization.image}
            />
          </ListItemIcon>
          <ListItemText secondary={`@${organization.gatewayId}`}>
            {organization.name}
          </ListItemText>
          <Chip
            label="ORG"
            size="small"
            sx={(theme) => ({
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
              color: 'primary.main',
            })}
          />
        </MenuItemLink>
      ))}
      {isOrg && (
        <MenuItemLink
          href={routes.dashboard.user.home}
          key={user.id}
          onClick={onClose}
        >
          <ListItemIcon>
            <GTWAvatar name={user.id} src={user.profilePicture} />
          </ListItemIcon>
          <ListItemText secondary={`@${user.gatewayId}`}>
            {user.gatewayId}
          </ListItemText>
        </MenuItemLink>
      )}
      <Divider />
    </>
  );
}
