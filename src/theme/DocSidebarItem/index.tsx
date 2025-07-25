import DefaultSidebarItem from '@theme-original/DocSidebarItem';

export default function DocSidebarItem(props) {
  let methodType = ""; 
  let methodColor = "";
  
  if (props.item.className?.includes("get")) {
    methodType = "GET";
    methodColor = "#61affe";
  } else if (props.item.className?.includes("post")) {
    methodType = "POST";
    methodColor = "#49cc90";
  } else if (props.item.className?.includes("put")) {
    methodType = "PUT";
    methodColor = "#fca130";
  } else if (props.item.className?.includes("delete")) {
    methodType = "DELETE";
    methodColor = "#f93e3e";
  } else if (props.item.className?.includes("patch")) {
    methodType = "PATCH";
    methodColor = "#50e3c2";
  }

  // If this is an API method item, render with method badge
  if (methodType) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '16px' }}>
        <span
          style={{
            backgroundColor: methodColor,
            color: 'white',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            minWidth: 'fit-content',
            flexShrink: 0,
          }}
        >
          {methodType}
        </span>
        <div style={{ flex: 1 }}>
          <DefaultSidebarItem {...props} />
        </div>
      </div>
    );
  }

  // For non-API items, render normally
  return <DefaultSidebarItem {...props} />;
}

