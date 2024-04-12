from flask import Flask
from flask_migrate import Migrate 
from sqlalchemy import create_engine, inspect
from sqlalchemy.orm import declarative_base

from database import db
from config.db_data import uri
from service.auth.authirecation import auth_bp
from service.users.get_user import users_bp

app = Flask(__name__)
app.register_blueprint(auth_bp, url_prefix="/auth")
app.register_blueprint(users_bp, url_prefix="/users")

# config
app.config["SQLALCHEMY_DATABASE_URI"] = uri
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = 'super secret key'

# db
migrate = Migrate(app, db)

engine = create_engine(uri)
Base = declarative_base()
Base.metadata.create_all(bind=engine)

inspector = inspect(engine)
if "users" in inspector.get_table_names():
    print("tables 'users' created.")
else:
    print("table not created")