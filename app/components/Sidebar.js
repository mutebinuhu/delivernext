// src/components/Sidebar.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  padding: 20px;
  color: white;
  z-index: 1;
`;

const Sidebar = ({ isOpen }) => {
    const variants = {
        open: { x: 0 },
        closed: { x: '-100%' },
    };

    return (
        <SidebarContainer
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
        >
            <h2>Sidebar</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </SidebarContainer>
    );
};

export default Sidebar;
