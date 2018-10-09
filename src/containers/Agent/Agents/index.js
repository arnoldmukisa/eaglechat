import React from 'react';
import LayoutWrapper from 'components/utility/layoutWrapper';
import Papersheet from 'components/utility/papersheet';
import { FullColumn } from 'components/utility/rowColumn';
import IntlMessages from 'components/utility/intlMessages';
import AddNewUser from "./add";
export default () => (
  <LayoutWrapper>
	  <FullColumn>
		  <Papersheet title={<IntlMessages id="Help" />}>
		  	Manage Agents Here
			<div className="SidebarButtonsWrapper">
          		<AddNewUser />
          	</div>

		  </Papersheet>
	  </FullColumn>
  </LayoutWrapper>
);
