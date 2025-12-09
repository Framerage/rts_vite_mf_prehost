declare module "chat_app/Chat" {
  const Chat: React.FC;
  export default Chat;
}

declare module "child_main_page/SharedMainPage" {
  const SharedMainPage: React.FC<{msg: string}>;
  export default SharedMainPage;
}
