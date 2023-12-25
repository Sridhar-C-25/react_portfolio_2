import * as React from 'react';

declare function mergeRefs<T = any>(refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | undefined | null>): React.RefCallback<T>;

export { mergeRefs };
