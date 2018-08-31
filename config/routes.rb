Rails.application.routes.draw do

  root to: "react#index"
  
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
    get "*path", to: "react#index", :constraints => lambda{|req| req.path !~ /graphiql$/}
  else
    get "*path", to: "react#index"
  end

  post "/graphql", to: "graphql#execute"
end
