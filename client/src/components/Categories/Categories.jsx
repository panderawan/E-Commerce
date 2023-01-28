import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e'
            alt=''
          />
          <button>
            <Link to='/products/1' className='link'>
              Sale
            </Link>
          </button>
        </div>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e'
            alt=''
          />
          <button>
            <Link to='/products/1' className='link'>
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e'
            alt=''
          />
          <button>
            <Link to='/products/2' className='link'>
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e'
                alt=''
              />
              <button>
                <Link to='/products/3' className='link'>
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e'
                alt=''
              />
              <button>
                <Link to='/products/4' className='link'>
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e'
            alt=''
          />
          <button>
            <Link to='/products/5' className='link'>
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
