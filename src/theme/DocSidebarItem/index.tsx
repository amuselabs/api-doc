import DefaultSidebarItem from '@theme-original/DocSidebarItem';


export default function DocSidebarItem(props) {
  let methodType = ""; 
  let methodClass = "";
  
  if (props.item.className?.includes("get")) {
    methodType = "GET";
    methodClass = "api-method-get";
  } else if (props.item.className?.includes("post")) {
    methodType = "POST";
    methodClass = "api-method-post";
  } else if (props.item.className?.includes("put")) {
    methodType = "PUT";
    methodClass = "api-method-put";
  } else if (props.item.className?.includes("delete")) {
    methodType = "DELETE";
    methodClass = "api-method-delete";
  } else if (props.item.className?.includes("patch")) {
    methodType = "PATCH";
    methodClass = "api-method-patch";
  }

  // If this is an API method item, render with method badge
  if (methodType) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '16px' }}>
        <span
          className={methodClass}
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

