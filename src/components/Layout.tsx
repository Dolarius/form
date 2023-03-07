import "./styles.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
