import { Meta } from '@storybook/react';
import { map } from 'ramda';
import React, { useRef, useState } from 'react';
import Icon, { iconBaseUrl } from './index';

export default {
  title: 'Example/Icon',
  component: Icon,
} as Meta;

// export const Default = Template.bind({});
export const All = () => {
  const ref = useRef<HTMLObjectElement>(null);
  const [symbolNodeList, setSymbolNodeList] = useState<SVGSymbolElement[]>([]);

  const handleLoad = (event: React.SyntheticEvent<HTMLObjectElement>) => {
    const document = (event.target as HTMLObjectElement).contentDocument;
    if (!document) return;

    const symbols = Array.prototype.slice.call(
      document.querySelectorAll('symbol'),
    ) as SVGSymbolElement[];
    setSymbolNodeList(symbols);
  };

  return (
    <>
      <object
        style={{ position: 'absolute', visibility: 'hidden' }}
        aria-label="sprite-sheet"
        data={iconBaseUrl}
        onLoad={handleLoad}
        ref={ref}
      />
      {map((symbol) => {
        return (
          <div key={symbol.id}>
            <span>{symbol.id}</span>
            <Icon name={symbol.id} width={15} height={15} />
          </div>
        );
      }, symbolNodeList)}
    </>
  );
};

// export const Large = Template.bind({});
// Large.args = {
//   children: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   children: 'Button',
// };
